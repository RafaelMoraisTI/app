import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

    mobileQuery: MediaQueryList;
    userName: string = "Rafael Morais";
    isAdmin: boolean =  false;

    ngOnInit(): void {
        this.isAdmin = true;
        this.userName = "RAFAEL";
    }

}
