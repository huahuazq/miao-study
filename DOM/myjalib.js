/**
 * Created by hq on 2017/7/13.
 */
function getByClass(classname,context) {
    context = context || window;
    var result = [];
    var arr = context.getElementsByTagName('*');
    var re = new  RegExp('\\b'+classname+'\\b');//***
    for(var i = 0; i<arr.length; i++){
        if(re.test(arr[i].className)){
            result.push(arr[i]);
        }
    }
    return result;
}
function $(selector,context) {
    context = context || window;
    var elements = [];
    switch (selector.charAt(0)){
        case '#':
            elements = [document.getElementById(selector.substring(1))];
            break;
        case '.':
            elements = getByClass(selector.substring(1), context);
            break;
        default:
            elements = context.getElementsByTagName(selector);
            break;
    }
    return {
        click: function (fn) {
            for(var i=0; i<elements.length; i++){
                addEvent(elements, 'click', fn);
            }
            return this;
        },
        mouseover: function (fn) {
            for(var i=0; i<elements.length; i++){
                addEvent(elements, 'mouseover', fn);
            }
            return this;
        },
        mouseout: function (fn) {
            for(var i=0; i<elements.length; i++){
                addEvent(elements, 'mouseout', fn);
            }
            return this;
        },
        css: function (attr, value) {
            if(value){
                for(var i=0; i<elements.length; i++){
                    elements[i].style[attr] = value;
                }
                return this;
            }else if(typeof attr === 'string'){
                return getStyle(elements[0], attr);
            }else{
                for(var p in attr){
                    switch (p){
                        case'width':
                        case'height':
                        case'padding':
                        case'padding-top':
                        case'padding-right':
                        case'padding-left':
                        case'padding-bottom':
                            value = /\%/.test(attr[p])?attr[p]:Math.max(parseInt(attr[p]), 0) + 'px';
                            break;
                        case'left':
                        case'right':
                        case'top':
                        case'bottom':
                        case'margin':
                        case'margin-top':
                        case'margin-left':
                        case'margin-right':
                        case'margin-bottom':
                            value = /\%/.test(attr[p])?attr[p]:parseInt(attr[p]) + 'px';
                            break;
                        default:
                            value = attr[p];
                    }
                    for(var i=0; i<elements.length; i++){
                        elements[i].style[p] = value;
                    }
                }
                return this;
            }
        },
        next: function () {
            var elem = elements[0];
            do{
                elem = elem && elem.nextSibling;
            }while (elem && elem.nodeType != 1)
            return elem;
        }
    };
}

function next(elem) {
    do{
        elem = elem && elem.nextSibling;
    }while (elem && elem.nodeType != 1)
    return elem;
}
function prev(elem){
    do{
        elem = elem && elem.previousSibling;
    }while (elem && elem.nodeType != 1)
    return elem;
}
function first(elem){
    elem = elem.firstChild;
    return elem && elem.nodeType == 1 ?elem : next(elem);
}
function last(elem){
    elem = elem.lastChild;
    return elem && elem.nodeType == 1?elem:prev(elem);
}
function before(elem, newNode){
    elem.parentNode.insertBefore(newNode,elem);
}
function after(elem, newNode){
    if(elem.nextSibling){
        before(elem.nextSibling,newNode);
    }else {
        elem.parentNode.appendChild(newNode);
    }
}
function remove(elem) {
    elem.parentNode.removeChild(elem);
}
function siblings(elem) {
    var result = [];
    var elements = elem.parentNode.children;
    for (var i = 0; i < elements.length; i++) {
        if (elem != elements[i]) {
            result.push(elements[i]);
        }
    }
    return result;
}
function cloneObj(obj) {
    var newObj = {};
    for(var p in obj){
        if(typeof obj[p] === 'object'){//三个等号
            newObj[p] = cloneObj(obj[p]);
        }else{
            newObj[p] = obj[p];
        }
    }
    return newObj;
}
function extend(target,obj) {
    for(var p in obj){
        if(typeof obj[p] === 'object'){
            target[p] = cloneObj(obj[p]);
        }else{
            target[p] = obj[p];
        }
    }
    return target;
}
function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}
function getStyle(elem, attr) {
    if(elem.currentStyle){
        return elem.currentStyle[attr];
    }else if(window.getComputedStyle){
        return getComputedStyle(elem,false)[attr];
    }else{
        return elem.style[attr];
    }

}
function removeEvent(elem, type, fn) {
    if(elem.removeEventListener){
        elem.removeEventListener(type, fn, false);
    }else if(elem.detachEvent){
        elem[type+fn] = function () {
            fn.call(elem);
        }
        elem.detachEvent ('on'+type, elem[type+fn]);
    }else{
        elem['on'+type] = null;
    }
}
function css(elem, attr, value) {
    if(value){//如果给value传了值
        elem.style[attr] = value;
    }else{
        if(typeof attr === 'string'){
            return getStyle(elem, attr);
        }else{
            for(var p in attr){
                switch(p){
                    case 'width':
                    case 'height':
                    case 'padding':
                    case 'paddingLeft':
                    case 'paddingRight':
                    case 'paddingTop':
                    case 'paddingBottom':
                        value = /\%/.test(attr[p])?attr[p]:Math.max(parseInt(attr[p]), 0) + 'px';
                        break;
                    case 'left':
                    case 'top':
                    case 'bottom':
                    case 'right':
                    case 'margin':
                    case 'marginLeft':
                    case 'marginRight':
                    case 'marginTop':
                    case 'marginBottom':
                        value = /\%/.test(attr[p])?attr[p]:parseInt(attr[p]) + 'px';
                        break;
                    default:
                        value = attr[p];
                }
                elem.style[p] = value;
            }
        }
    }
}
function id(sId){
    return document.getElementById(sId);
}
function tag(sTagName, context){
    context = context || document;
    return context.getElementsByTagName(sTagName);
}