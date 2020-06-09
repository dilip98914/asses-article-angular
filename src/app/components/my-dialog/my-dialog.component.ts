import { APIService } from './../../services/api.service';
import { Component, OnInit,Inject,ChangeDetectorRef} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss']
})
export class MyDialog {
  form;

  constructor(
    public dialogRef: MatDialogRef<MyDialog>,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private apiService:APIService,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.form = this.fb.group({
        detail:[''],
        image: ['']
      });
      if(this.data){
        this.form.patchValue({
          detail:this.data.detail,
          image:this.data.image,
        })
      }
    }

  
  onNoClick(): void {
    this.dialogRef.close();
  }
  addArticle(){
   this.apiService.postReq('http://localhost:3000/articles/create',this.form.value).subscribe(res=>{
     console.log(res);
   })
  }

  onFileChange(event) {
    let reader = new FileReader();
   
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        this.form.patchValue({
          file: reader.result
        });
        
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

}
