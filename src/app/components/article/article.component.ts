import { APIService } from './../../services/api.service';
import { Component, OnInit,Inject,ChangeDetectorRef} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MyDialog} from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  // articles=[
  //   {
  //   "detail":"Commodo laboris consectetur ipsum incididunt est eu consequat anim magna dolor laborum. Nulla amet nulla eiusmod magna occaecat tempor. Tempor deserunt tempor quis aliquip duis. Excepteur aliquip minim dolore ullamco consectetur adipisicing cillum deserunt enim amet officia. Amet laborum adipisicing pariatur qui mollit.",
  //   "image":"https://cdn.pixabay.com/photo/2020/06/01/08/46/water-5245722_960_720.jpg",
  //   },
  //   {
  //     "detail":"Commodo laboris consectetur ipsum incididunt est eu consequat anim magna dolor laborum. Nulla amet nulla eiusmod magna occaecat tempor. Tempor deserunt tempor quis aliquip duis. Excepteur aliquip minim dolore ullamco consectetur adipisicing cillum deserunt enim amet officia. Amet laborum adipisicing pariatur qui mollit.",
  //     "image":"https://cdn.pixabay.com/photo/2020/06/01/08/46/water-5245722_960_720.jpg",
  //   },
  //   {
  //     "detail":"Commodo laboris consectetur ipsum incididunt est eu consequat anim magna dolor laborum. Nulla amet nulla eiusmod magna occaecat tempor. Tempor deserunt tempor quis aliquip duis. Excepteur aliquip minim dolore ullamco consectetur adipisicing cillum deserunt enim amet officia. Amet laborum adipisicing pariatur qui mollit.",
  //     "image":"https://cdn.pixabay.com/photo/2020/06/01/08/46/water-5245722_960_720.jpg",
  //   },
  //   {
  //     "detail":"Commodo laboris consectetur ipsum incididunt est eu consequat anim magna dolor laborum. Nulla amet nulla eiusmod magna occaecat tempor. Tempor deserunt tempor quis aliquip duis. Excepteur aliquip minim dolore ullamco consectetur adipisicing cillum deserunt enim amet officia. Amet laborum adipisicing pariatur qui mollit.",
  //     "image":"https://cdn.pixabay.com/photo/2020/06/01/08/46/water-5245722_960_720.jpg",
  //   },
  //   {
  //     "detail":"Commodo laboris consectetur ipsum incididunt est eu consequat anim magna dolor laborum. Nulla amet nulla eiusmod magna occaecat tempor. Tempor deserunt tempor quis aliquip duis. Excepteur aliquip minim dolore ullamco consectetur adipisicing cillum deserunt enim amet officia. Amet laborum adipisicing pariatur qui mollit.",
  //     "image":"https://cdn.pixabay.com/photo/2020/06/01/08/46/water-5245722_960_720.jpg",
  //     },
  //     {
  //       "detail":"Commodo laboris consectetur ipsum incididunt est eu consequat anim magna dolor laborum. Nulla amet nulla eiusmod magna occaecat tempor. Tempor deserunt tempor quis aliquip duis. Excepteur aliquip minim dolore ullamco consectetur adipisicing cillum deserunt enim amet officia. Amet laborum adipisicing pariatur qui mollit.",
  //       "image":"https://cdn.pixabay.com/photo/2020/06/01/08/46/water-5245722_960_720.jpg",
  //     },
  //     {
  //       "detail":"Commodo laboris consectetur ipsum incididunt est eu consequat anim magna dolor laborum. Nulla amet nulla eiusmod magna occaecat tempor. Tempor deserunt tempor quis aliquip duis. Excepteur aliquip minim dolore ullamco consectetur adipisicing cillum deserunt enim amet officia. Amet laborum adipisicing pariatur qui mollit.",
  //       "image":"https://cdn.pixabay.com/photo/2020/06/01/08/46/water-5245722_960_720.jpg",
  //     },
  //     {
  //       "detail":"Commodo laboris consectetur ipsum incididunt est eu consequat anim magna dolor laborum. Nulla amet nulla eiusmod magna occaecat tempor. Tempor deserunt tempor quis aliquip duis. Excepteur aliquip minim dolore ullamco consectetur adipisicing cillum deserunt enim amet officia. Amet laborum adipisicing pariatur qui mollit.",
  //       "image":"https://cdn.pixabay.com/photo/2020/06/01/08/46/water-5245722_960_720.jpg",
  //     },
  // ]
  articles;

  constructor(
    public dialog:MatDialog,
    private apiService:APIService,
    ) { }

  ngOnInit(): void {
    this.apiService.getReq('http://localhost:3000/articles/all').subscribe(res=>{
      this.articles=res;
      this.articles.map(article=>{
          article.image=`http://localhost:3000/${article.image}`;
      })
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialog, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  updateDetail(article){
    const dialogRef = this.dialog.open(MyDialog, {
      width: '250px',
      data:{
        detail:article.detail,
        image:article.image
      }
    });
    // this.apiService.postReq('http://localhost:3000/articles/update-detail',this.form.value).subscribe(res=>{
    //   console.log(res);
    // })
  }

  updateImage(){
    // this.apiService.postReq('http://localhost:3000/articles/update-image',this.form.value).subscribe(res=>{
    //   console.log(res);
    // })
  }


}

