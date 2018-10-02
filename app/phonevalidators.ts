import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
selector: '[allowPhoneNumber]'
})
export class AllowPhoneNumberDirective {
@Input() allowPhoneNumber: boolean;
constructor(private el: ElementRef) { }



@HostListener('keydown', ['$event']) onKeyDown(event) {
const e = <KeyboardEvent>event;
if (this.allowPhoneNumber) {
if ([46, 8, 9, 27, 13, 32].indexOf(e.keyCode) !== -1 ||
// Allow: Ctrl+A
/* (e.keyCode >= 65 && e.keyCode <= 90) || */
// Allow: Ctrl+C
(e.keyCode === 67 && e.ctrlKey === true) ||
// Allow: Ctrl+X
(e.keyCode === 88 && e.ctrlKey === true) ||
// Allow: home, end, left, right
(e.keyCode === 86 && e.ctrlKey === true) ||
(e.keyCode === 65 && e.ctrlKey === true) ||
(e.shiftKey === true && e.keyCode === 187) || 
// (e.keyCode === 109 || e.keyCode === 189 || e.keyCode ===173) || 
(e.keyCode >= 35 && e.keyCode <= 39)) {
// let it happen, don't do anything
return;
}
// Ensure that it is a number and stop the keypress
if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) || e.keyCode===16) {
e.preventDefault();
}
}
}
} 