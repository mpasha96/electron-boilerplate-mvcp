let DOM = {
    element : function (id : string) : HTMLElement {
        return document.getElementById(id);
    },
    first : function (cls : string) : Element {
        return <HTMLElement>document.getElementsByClassName(cls)[0];
    },
    last : function (cls : string) : Element {
        let items = document.getElementsByClassName(cls);
        return items[items.length - 1];
    },
    input : function (id : string) : HTMLElement {
        return <HTMLInputElement>document.getElementById(id);
    },
    all : function(cls : string) {
        return document.getElementsByClassName(cls);
    }
}
export {DOM}