const data = await (new Request('https://stevemould.com/api')).loadJSON()


const w = new ListWidget()

const bg = new LinearGradient()
bg.colors = [new Color('#ffa300'), new Color('#f7dc66'),new Color('#f7dc66'),new Color('#ffa300'),]
bg.locations = [0,0.25,0.75,1]

const textColor = new Color('#1c394c')
const nameFont = Font.headline()
const titleFont = Font.regularSystemFont(9)


w.backgroundGradient = bg

w.addSpacer()

const kct1 = w.addText('Steve has')
kct1.centerAlignText()
kct1.font = titleFont
kct1.textColor = textColor 

const kc = w.addText(String((-1)*data.subsData.countDiff))
kc.centerAlignText()
kc.font = nameFont
kc.textColor = textColor 

const kct = w.addText('more subscribers than Matt')
kct.centerAlignText()
kct.font = titleFont
kct.textColor = textColor 


w.addSpacer(8)

const act1 = w.addText('and')
act1.centerAlignText()
act1.font = titleFont
act1.textColor = textColor 


const ac = w.addText(String((-1)*data.viewsData.countDiff))
ac.centerAlignText()
ac.font = nameFont
ac.textColor = textColor 

const act = w.addText('more views')
act.centerAlignText()
act.font = titleFont
act.textColor = textColor 

w.addSpacer(8)

const ac2 = w.addText("Subscriber ratio: "+String(data.viewsData.SteveCount/data.viewsData.MattCount))
ac2.centerAlignText()
ac2.font = nameFont
ac2.textColor = textColor 

w.addSpacer()
w.presentSmall()

Script.setWidget(w)
