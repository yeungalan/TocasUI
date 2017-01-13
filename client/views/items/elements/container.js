var normal  = 'normal'
var large   = 'large'
var small   = 'small'
var tiny    = 'tiny'
var source  = 'source'
var example = 'example'


export default
{
    sidebar: false,
    header:
    {
        title   : '容器',
        subTitle:
        `
            協助你保持身材。
        `
    },
    html:
    [
        {
            type       : large,
            title      : '說明',
            description:
            `
                <p>容器用來保持文字在中間，如此一來就不會因為螢幕太寬而導致文字區域太寬，你也可以在裡面放置格線系統，這樣就可以讓內容集中在螢幕中間。這裡是不同容器之間的寬度資訊表格。</p>
                <table class="ts small stackable definition table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>1200px</th>
                            <th>100%</th>
                            <th>860px</th>
                            <th>992px</th>
                            <th>700px</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>樣式名稱</td>
                            <td><span class="ts horizontal label">container</span></td>
                            <td><span class="ts horizontal label">fluid container</span></td>
                            <td><span class="ts horizontal label">text container</span></td>
                            <td><span class="ts horizontal label">narrow container</span></td>
                            <td><span class="ts horizontal label">very narrow container</span></td>
                        </tr>
                        <tr>
                            <td>裝置稱呼</td>
                            <td>容器</td>
                            <td>流動容器</td>
                            <td>文字容器</td>
                            <td>窄形容器</td>
                            <td>超窄容器</td>
                        </tr>
                    </tbody>
                </table>
            `
        },
        {
            type       : normal,
            title      : '容器',
            description: '容器本身。',
            link       : false
        },
        {
            type       : small,
            title      : '基本',
            description: `一個最基本的容器。`,
            link       : 'container'
        },
        {
            type: 'example',
            code: `<div class="ts container">
    保障任何人的著作權，其中包括二次創作，二次創作僅可在原作者未聲明否決下進行發佈和創作， 在未經原作允許下衍生任何具有原作之內容，基於衍生理念與內容為判決要點，
    原作必須基於合理使用之理念提出移除、上訴任何非符合合理使用概念的衍生內容， 合理使用的理念如下： 使用目的及性質 其著重點在於內容是否有所轉化，如衍生創作另有新意，非僅複製原作內容。
    版權作品性質 以真實、事實所闡述之作品較虛構作品來的能夠符合合理使用。 使用版權作品的多寡 引用少量的原創著作比起引用大量來要的符合合理使用，但倘若原創著作成為衍生著作之核心內容，
    即使少量的原創著作被引用，也較不可能符合合理使用之原則。 使用行為對於版權作品的市場或價值之影響 透過原創著作的內容而進行獲利並造成原創著作部分損害，較不符合合理使用之原則。
</div>`,
            mark: 'container'
        },
        {
            type       : small,
            title      : '文字容器',
            description: `專門擺放文字的容器，比起一般容器更窄而且字更大。`,
            link       : 'text'
        },
        {
            type: 'example',
            code: `<div class="ts text container">
    保障任何人的著作權，其中包括二次創作，二次創作僅可在原作者未聲明否決下進行發佈和創作， 在未經原作允許下衍生任何具有原作之內容，基於衍生理念與內容為判決要點，
    原作必須基於合理使用之理念提出移除、上訴任何非符合合理使用概念的衍生內容， 合理使用的理念如下： 使用目的及性質 其著重點在於內容是否有所轉化，如衍生創作另有新意，非僅複製原作內容。
    版權作品性質 以真實、事實所闡述之作品較虛構作品來的能夠符合合理使用。 使用版權作品的多寡 引用少量的原創著作比起引用大量來要的符合合理使用，但倘若原創著作成為衍生著作之核心內容，
    即使少量的原創著作被引用，也較不可能符合合理使用之原則。 使用行為對於版權作品的市場或價值之影響 透過原創著作的內容而進行獲利並造成原創著作部分損害，較不符合合理使用之原則。
</div>`,
            mark: 'text'
        },
        {
            type       : small,
            title      : '窄的',
            description: `比起一般要來的窄的容器。`,
            link       : 'narrow'
        },
        {
            type: 'example',
            code: `<div class="ts narrow container">
    保障任何人的著作權，其中包括二次創作，二次創作僅可在原作者未聲明否決下進行發佈和創作， 在未經原作允許下衍生任何具有原作之內容，基於衍生理念與內容為判決要點，
    原作必須基於合理使用之理念提出移除、上訴任何非符合合理使用概念的衍生內容， 合理使用的理念如下： 使用目的及性質 其著重點在於內容是否有所轉化，如衍生創作另有新意，非僅複製原作內容。
    版權作品性質 以真實、事實所闡述之作品較虛構作品來的能夠符合合理使用。 使用版權作品的多寡 引用少量的原創著作比起引用大量來要的符合合理使用，但倘若原創著作成為衍生著作之核心內容，
    即使少量的原創著作被引用，也較不可能符合合理使用之原則。 使用行為對於版權作品的市場或價值之影響 透過原創著作的內容而進行獲利並造成原創著作部分損害，較不符合合理使用之原則。
</div>`,
            mark: 'narrow'
        },
        {
            type       : small,
            title      : '更窄的',
            description: `比起窄容器還要來的更窄。`,
            link       : 'very-narrow'
        },
        {
            type: 'example',
            code: `<div class="ts very narrow container">
    保障任何人的著作權，其中包括二次創作，二次創作僅可在原作者未聲明否決下進行發佈和創作， 在未經原作允許下衍生任何具有原作之內容，基於衍生理念與內容為判決要點，
    原作必須基於合理使用之理念提出移除、上訴任何非符合合理使用概念的衍生內容， 合理使用的理念如下： 使用目的及性質 其著重點在於內容是否有所轉化，如衍生創作另有新意，非僅複製原作內容。
    版權作品性質 以真實、事實所闡述之作品較虛構作品來的能夠符合合理使用。 使用版權作品的多寡 引用少量的原創著作比起引用大量來要的符合合理使用，但倘若原創著作成為衍生著作之核心內容，
    即使少量的原創著作被引用，也較不可能符合合理使用之原則。 使用行為對於版權作品的市場或價值之影響 透過原創著作的內容而進行獲利並造成原創著作部分損害，較不符合合理使用之原則。
</div>`,
            mark: 'very narrow'
        },
        {
            type       : small,
            title      : '流動',
            description: `讓容器的寬度隨父容器決定，能多寬就多寬。`,
            link       : 'text'
        },
        {
            type: 'example',
            code: `<div class="ts fluid container">
    保障任何人的著作權，其中包括二次創作，二次創作僅可在原作者未聲明否決下進行發佈和創作， 在未經原作允許下衍生任何具有原作之內容，基於衍生理念與內容為判決要點，
    原作必須基於合理使用之理念提出移除、上訴任何非符合合理使用概念的衍生內容， 合理使用的理念如下： 使用目的及性質 其著重點在於內容是否有所轉化，如衍生創作另有新意，非僅複製原作內容。
    版權作品性質 以真實、事實所闡述之作品較虛構作品來的能夠符合合理使用。 使用版權作品的多寡 引用少量的原創著作比起引用大量來要的符合合理使用，但倘若原創著作成為衍生著作之核心內容，
    即使少量的原創著作被引用，也較不可能符合合理使用之原則。 使用行為對於版權作品的市場或價值之影響 透過原創著作的內容而進行獲利並造成原創著作部分損害，較不符合合理使用之原則。
</div>`,
            mark: 'fluid'
        },
        {
            type       : normal,
            title      : '和其他元件搭配',
            description: '容器可以擺放至元件內或是和其他元件搭配。',
            link       : false
        },
        {
            type       : small,
            title      : '選單',
            description: `你可以在選單內擺放容器，如此一來選單內的項目就不會過寬。`,
            link       : 'menu-container'
        },
        {
            type: 'example',
            code: `<div class="ts menu">
    <div class="ts very narrow container">
        <a class="item">首頁</a>
        <a class="item">文件</a>
        <a class="item"><i class="download icon"></i>下載</a>
        <a class="item">關於</a>
    </div>
</div>`,
            mark: 'container, menu'
        },
        {
            type       : small,
            title      : '網格系統',
            description: `一個網格系統本身就可以是容器，這樣就不會讓網格系統過寬貼齊螢幕邊緣。`,
            link       : 'grid-container'
        },
        {
            type: 'example',
            code: `<div class="ts four column very narrow container grid">
    <div class="column"></div>
    <div class="column"></div>
    <div class="column"></div>
    <div class="column"></div>
</div>`,
            mark: 'container, grid'
        },
        {
            type       : small,
            title      : '片段',
            description: `片段本身就可以是一個容器，避免太寬而貼齊螢幕左右邊緣。`,
            link       : 'segment-container'
        },
        {
            type: 'example',
            code: `<div class="ts very narrow container segment">
    保障任何人的著作權，其中包括二次創作，二次創作僅可在原作者未聲明否決下進行發佈和創作， 在未經原作允許下衍生任何具有原作之內容，基於衍生理念與內容為判決要點，
    原作必須基於合理使用之理念提出移除、上訴任何非符合合理使用概念的衍生內容， 合理使用的理念如下： 使用目的及性質 其著重點在於內容是否有所轉化，如衍生創作另有新意，非僅複製原作內容。
    版權作品性質 以真實、事實所闡述之作品較虛構作品來的能夠符合合理使用。 使用版權作品的多寡 引用少量的原創著作比起引用大量來要的符合合理使用，但倘若原創著作成為衍生著作之核心內容，
    即使少量的原創著作被引用，也較不可能符合合理使用之原則。 使用行為對於版權作品的市場或價值之影響 透過原創著作的內容而進行獲利並造成原創著作部分損害，較不符合合理使用之原則。
</div>`,
            mark: 'container, segment'
        },
    ]
}