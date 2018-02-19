export default class allPrefPulldown extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let selectElem = document.createElement('select');
        const prefList = [
            '北海道',
            '青森県',
            '岩手県',
            '宮城県',
            '秋田県',
            '山形県',
            '福島県',
            '栃木県',
            '群馬県',
            '茨城県',
            '埼玉県',
            '千葉県',
            '東京都',
            '神奈川県',
            '山梨県',
            '長野県',
            '新潟県',
            '富山県',
            '石川県',
            '福井県',
            '静岡県',
            '岐阜県',
            '愛知県',
            '三重県',
            '滋賀県',
            '京都府',
            '大阪府',
            '兵庫県',
            '奈良県',
            '和歌山県',
            '鳥取県',
            '島根県',
            '岡山県',
            '広島県',
            '山口県',
            '徳島県',
            '香川県',
            '愛媛県',
            '高知県',
            '福岡県',
            '佐賀県',
            '長崎県',
            '熊本県',
            '大分県',
            '宮崎県',
            '鹿児島県',
            '沖縄県'
            ];
        const appendOption = (prefValue) => {
            const optionElem = document.createElement('option');
            optionElem.text = prefValue;
            return optionElem;
        };
        for (let i = 0, len = prefList.length; i < len; i++) {
            selectElem.appendChild(appendOption(prefList[i]));
        }
        this.appendChild(selectElem);
    }
}
