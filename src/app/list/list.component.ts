import { Component, OnInit } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

import { GlobelServiceService } from "../globel-service.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  positions: any;
  pos: any;

  Dragform: FormGroup;

  myStorage = window.localStorage;
  constructor(
    private service: GlobelServiceService,
    private router: Router,
    private http: HttpClient,
    private formBiuld: FormBuilder
  ) {}

  ngOnInit() {
  

    this.service.getData().subscribe((res: any) => {
      this.pos = res["data"].pos_1;
      console.log(this.pos);
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.pos, event.previousIndex, event.currentIndex);

    let data = { pos_1: this.pos, comp_num: "56" };
    this.service.postdata(data).subscribe((res: any) => {
      if (res) {
        if (res["status"] == "1") {
          alert("inserted successfully");
        }
      }
    });
  }

  logOut() {
    this.service.removeLocalStorage("User");
    this.router.navigate(["login"]);
  }
}

// formInitialize() {
//   this.Dragform = this.formBiuld.group({
//     title: [""],
//     index: [],
//   });
// }
