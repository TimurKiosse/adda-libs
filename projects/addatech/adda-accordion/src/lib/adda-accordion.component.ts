import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { AddaAccordionActionModel } from './adda-accordion-action.model';
import { addaAccordionAnimations } from './adda-accordion-animation';

@Component({
  selector: 'adda-accordion',
  templateUrl: './adda-accordion.component.html',
  styleUrls: ['./adda-accordion.component.scss'],
  animations: addaAccordionAnimations
})
export class AddaAccordionComponent implements OnInit {

  @Input() title: string;
  @Input() iconToggleClass = 'icon-angle-right';
  @Input() iconMoreClass = ' icon-more';
  @Input() actions: AddaAccordionActionModel[];
  @Input() iconsLimit = 1;
  @Input() showUi = true;

  @Output() actionClicked = new EventEmitter<AddaAccordionActionModel>();

  private _isOpen = false;
  @Input()
  set isOpen(val) {
    this._isOpen = val;
    this.isOpenChange.emit(val);
  }
  get isOpen(): boolean {
    return this._isOpen;
  }

  @Output() isOpenChange = new EventEmitter<boolean>();

  private $element = this.elementRef.nativeElement;

  ddMenuOpened = false;

  visibleActions: AddaAccordionActionModel[];
  dropdownActions: AddaAccordionActionModel[];
  constructor(
    private elementRef: ElementRef,
  ) {
  }

  @HostListener('document:click', ['$event'])
  clickEvent(event: any): void {
    const $dd_cont = this.$element.querySelector('.dropdown');
    if ($dd_cont) {
      const clickedOutside = !$dd_cont.contains(event.target) && event.target !== $dd_cont;
      if (clickedOutside) {
        this.ddMenuOpened = false;
      }
    }
  }
  ngOnInit(): void {
    if(!this.title){
      this.title = 'Accordion title';
    }
    if (this.actions && this.actions.length === 1 && !this.actions[0].actionIconClass) {
      this.actions[0].actionIconClass = 'icon-plus-1';
    }
    if (this.iconsLimit > 3) {
      this.iconsLimit = 3;
    }
    if (this.iconsLimit === 1 && this.actions?.length > 1) {
      this.visibleActions = [];
      this.dropdownActions = this.actions;
    } else {
      if (this.actions?.length > this.iconsLimit) {
        this.visibleActions = this.actions.slice(0, this.iconsLimit - 1);
        this.dropdownActions = this.actions.slice(this.iconsLimit) || [];
      } else {
        this.visibleActions = this.actions;
        this.dropdownActions = [];
      }
    }
  }
}
