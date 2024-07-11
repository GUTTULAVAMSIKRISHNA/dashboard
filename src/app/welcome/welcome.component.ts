import { Component } from '@angular/core';
import { AppleService } from '../services/apple.service';
import { Apple } from '../models/apple';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
user:Apple[]=[];
login!:FormGroup
  constructor(private service:AppleService,private fb:FormBuilder){}

  ngOnInit():void{
    this.getall();
    this.Init();
  }
  Init():void{
    this.login=this.fb.group({
      name:['',[Validators.required,Validators.maxLength(30),Validators.minLength(5)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.maxLength(20),Validators.minLength(8)]],
    })
  }
  getall():void{
    this.service.getall().subscribe(data=> this.user=data);
  }
  adduser():void{
    const cat:Apple={...this.login.value,id:this.autoinc()}
    this.service.adduser(cat).subscribe(()=>{
      this.getall()
    })
  }
  autoinc():number{
    return this.user.length>0?Math.max(...this.user.map((record)=>record.id || 0))+1:1
  }
 
}

