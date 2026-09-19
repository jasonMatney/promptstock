"""Sculpted stylized heads. Analytic cheek/eye surfaces, inset eyes and broad hair masses.
Coordinates match the shared v6 human rig (Z up, -Y forward).
"""
import math
from math import sin, cos, pi, exp, sqrt

def build_face(api):
    make, loft, ribbon, ellipsoid = [api[k] for k in ('make','loft','ribbon','ellipsoid')]
    skin, rigid, M, hero, variant = [api[k] for k in ('skin','rigid','M','hero','variant')]
    lip=api['lip']; hair='hair_dark'; style=0 if hero else [0,1,2,3,4,5][variant]
    # A broad cheek, rounded chin and full cranium; adult stylization, not tiny heads.
    rows=[(1.565,.031,.043,-.008),(1.578,.059,.062,-.002),(1.597,.080,.073,.004),
          (1.623,.098,.084,.008),(1.652,.112,.093,.011),(1.68,.115,.098,.013),
          (1.71,.113,.10,.015),(1.741,.110,.10,.017),(1.77,.107,.099,.019),
          (1.80,.096,.088,.022),(1.825,.072,.065,.022),(1.842,.034,.031,.022),(1.846,.001,.001,.022)]
    def shape(p,a,j):
        x,y,z=p;f=max(0,-sin(a))**3
        y-=f*(.011*exp(-((z-1.668)/.025)**2)*exp(-((abs(x)-.064)/.034)**2))
        y+=f*(.006*exp(-((z-1.716)/.019)**2)*exp(-((abs(x)-.049)/.025)**2))
        y-=f*(.035*exp(-((z-1.679)/.02)**2)*exp(-(x/.021)**2)+.014*exp(-((z-1.709)/.034)**2)*exp(-(x/.017)**2))
        y-=f*(.004*exp(-((z-1.627)/.014)**2)*exp(-(x/.039)**2))
        return x,y,z
    def surface(x,z,offset=0):
        j=next((j for j in range(len(rows)-1) if rows[j][0]<=z<=rows[j+1][0]),3)
        p,q=rows[j:j+2];t=(z-p[0])/(q[0]-p[0]);rx=p[1]*(1-t)+q[1]*t;ry=p[2]*(1-t)+q[2]*t;cy=p[3]*(1-t)+q[3]*t
        a=-math.acos(max(-1,min(1,x/rx)))
        return shape((x,cy+ry*sin(a),z),a,j)[1]-offset
    head=loft('sculpted_face',[(0,y,z,rx,ry) for z,rx,ry,y in rows],skin,rigid('head'),'face',segments=48,shape=shape)
    # Close shaven beard is a vertex-painted tonal field, with no floating shell.
    if hero or style in [0,3]:
        c=head.data.color_attributes['Color'];base=M[hair].diffuse_color
        for l in head.data.loops:
            x,y,z=head.data.vertices[l.vertex_index].co
            edge=1.628+.045*min(1,abs(x)/.1)
            amt=max(0,min(.42,(edge-z)/.035))*max(0,min(1,(-y+.008)/.045))
            if abs(x)<.042 and z>1.615:amt*=.2
            old=c.data[l.index].color;c.data[l.index].color=tuple(old[k]*(1-amt)+base[k]*amt for k in range(3))+(1,)
    for a in [-1,1]:
        ellipsoid('ear',(a*.114,.011,1.686),(.018,.023,.034),skin,'head','face',16,8)
        ribbon('ear_concha',[(a*.121,-.008,1.704),(a*.125,-.010,1.686),(a*.12,-.007,1.674)],[.0025,.003,.0015],lip,'head','face',6)
        # Eye whites follow the face with a small convex dome. Closed almond topology.
        cx=a*.048;cz=1.716;outline=[]
        for i in range(24):
            t=2*pi*i/24;dx=.025*cos(t);dz=(.012 if sin(t)>0 else .008)*sin(t)
            outline.append((cx+dx,cz+dz))
        vs=[(cx,surface(cx,cz,.008),cz)]
        for x,z in outline:vs.append((x,surface(x,z,.0025),z))
        make('eye_white',vs,[(0,i+1,(i+1)%24+1) for i in range(24)],'paper_print',rigid('head'),'eyes')
        # Warm iris, dark pupil and a small physical catchlight read at conversation distance.
        ey=surface(cx,cz,.009)
        ellipsoid('iris',(cx,ey,cz),(.010,.0025,.010),'iris_hazel','head','eyes',20,8)
        ellipsoid('pupil',(cx,ey-.0025,cz),(.0052,.0015,.0062),'vinyl_black','head','eyes',16,6)
        ellipsoid('catchlight',(cx-.003,ey-.0043,cz+.0038),(.0022,.001,.0022),'paper_print','head','eyes',8,4)
        up=[outline[i] for i in range(13)]
        ribbon('upper_eyelid',[(x,surface(x,z,.004),z) for x,z in up],[.0015+.0015*sin(i*pi/12) for i in range(13)],skin,'head','eyes',6)
        low=outline[12:]+[outline[0]]
        ribbon('lower_eyelid',[(x,surface(x,z,.003),z) for x,z in low],[.0012]*len(low),skin,'head','eyes',5)
        brow=[(a*.022,1.746),(a*.04,1.751),(a*.061,1.750),(a*.078,1.742)]
        ribbon('brow',[(x,surface(x,z,.004),z) for x,z in brow],[.0025,.0045,.004,.001],hair,'head','facial_hair',8)
        ellipsoid('nostril',(a*.015,surface(a*.015,1.667,.002),1.667),(.004,.0015,.002),'skin_nostril','head','face',8,4)
        if style in [2,4,5]:
            ellipsoid('gold_earring',(a*.123,-.006,1.657),(.005,.006,.008),'gold','head','face',12,6)
    # Soft smiling lip edge; no grimacing open mouth or painted black slit.
    mouth=[(-.039,1.632),(-.026,1.623),(-.012,1.621),(0,1.622),(.014,1.622),(.028,1.627),(.037,1.638)]
    ribbon('lower_lip',[(x,surface(x,z,.002),z-.0025) for x,z in mouth],[.0005,.0018,.0026,.003,.0026,.0018,.0005],lip,'head','face',8)
    ribbon('smile',[(x,surface(x,z,.004),z) for x,z in mouth],[.0005,.0009,.0011,.0011,.0011,.0009,.0004],'skin_nostril','head','face',6)
    # The hair cap has a designed hairline and no exposed tube ends.
    vs=[];ns=48;nr=12
    for j in range(nr+1):
        t=j/nr
        for i in range(ns):
            a=2*pi*i/ns;front=max(0,-sin(a));side=abs(cos(a))
            edge=1.710+.067*front+.018*side
            if style==2:edge-=.075*(1-front)
            edge+=.006*sin(a*2+.7)*front
            z=edge+(1.881-edge)*sin(t*pi/2)
            # Offset from the actual cranium profile so the scalp never cuts through.
            if z<1.829:
                k=next((k for k in range(len(rows)-1) if rows[k][0]<=z<=rows[k+1][0]),8)
                p,q=rows[k:k+2];u=(z-p[0])/(q[0]-p[0]);rx=p[1]*(1-u)+q[1]*u+.022;ry=p[2]*(1-u)+q[2]*u+.021
            else:
                r=sqrt(max(0,1-((z-1.829)/.052)**2));rx=.090*r;ry=.083*r
            # Restrained sculpted grooves follow the sweep, never loose tubes.
            groove=1+.018*sin(a*7+t*4)*sin(t*pi)
            x=rx*cos(a)*groove-.003*sin(t*pi)
            y=.022+ry*sin(a)*groove
            vs.append((x,y,z))
    faces=[(j*ns+i,j*ns+(i+1)%ns,(j+1)*ns+(i+1)%ns,(j+1)*ns+i) for j in range(nr) for i in range(ns)]
    faces += [tuple(reversed(range(ns))),tuple(nr*ns+i for i in range(ns))]
    make('hair_cap',vs,faces,hair,rigid('head'),'hair')
    if style in [0,5]:
        ribbon('swept_fringe',[(-.098,-.049,1.79),(-.06,-.086,1.813),(.009,-.093,1.815),(.08,-.049,1.767)],[.003,.022,.026,.003],hair,'head','hair',12)
    elif style==3:
        pass  # A clean cropped silhouette.
    elif style==1:
        # Packed round curls, deliberately chunky; no wire-like flyaways.
        for row in range(3):
            n=12 if row<2 else 7
            for i in range(n):
                a=2*pi*i/n+row*.32;r=[.109,.087,.05][row]
                ellipsoid('curl',(r*cos(a),.018+r*sin(a),[1.774,1.827,1.856][row]),(.031,.031,.029),hair,'head','hair',12,6)
    elif style==2:
        for a in [-1,1]:
            loft('bob',[(a*.103,.035,1.59,.016,.055),(a*.117,.038,1.62,.029,.081),(a*.12,.03,1.72,.026,.085),(a*.08,.028,1.81,.026,.05)],hair,rigid('head'),'hair',segments=18)
        ribbon('side_part',[(-.08,-.056,1.79),(-.049,-.082,1.831),(.025,-.067,1.832),(.095,-.031,1.755)],[.014,.025,.029,.014],hair,'head','hair',10)
    elif style==4:
        ellipsoid('bun',(0,.107,1.831),(.069,.066,.06),hair,'head','hair',24,12)
        ribbon('hair_tie',[(-.052,.109,1.827),(0,.13,1.786),(.052,.109,1.827)],[.006,.006,.006],'gold','head','hair_detail',8)
