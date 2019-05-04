import { Component, Input } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'list',
    templateUrl: './list.component.html'
})

export class ListComponent {

    @Input() set filter(searchText: string) {
       this.searchText = searchText;
       this.onLoad();
    }

    searchText: string = '';
    baseUrl:string = 'http://awesome.test';
    glData = [];

    constructor(private httpClient : HttpClient){}

    onLoad(){

        if(!this.searchText)
        {
            return;
        }

        this
            .httpClient
            .get (
                this.baseUrl+'/php7/index.php?p='+encodeURIComponent(this.searchText)
            )
            .subscribe((res : any[]) => {
                try{
                    this.glData = JSON.parse(
                        res && res.toString() || '[]'
                    );
                }catch(e){}
            });
    }
}