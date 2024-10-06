class Takhti {
    constructor(selector: string, options: any) {
        alert(1);
        const parent = options.parent || document;
        const ta = parent.querySelector(selector);
        
        const takhti = document.createElement('div');
        takhti.classList.add('takhti-container');
        ta?.insertAdjacentElement('afterend', takhti);
    }
}

exports.Takhti = Takhti;