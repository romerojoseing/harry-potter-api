import { Component, OnInit } from '@angular/core';

import { AbstractControl, Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { AppService } from "src/app/services/app.service";

import Swal from 'sweetalert2';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  solicitudForm: FormGroup;

  students = null;

  today = new Date();
  year = this.today.getFullYear();

  localInfo = [];
  localInfo2 = [];

  houses: any[] = [
    {name: 'Gryffindor'},
    {name: 'Hufflepuff'},
    {name: 'Ravenclaw'},
    {name: 'Slytherin'}
  ]

  constructor(
    private appService: AppService,
    private formBuilde: FormBuilder
  ) { }

  get f() { return this.solicitudForm.controls; }

  ngOnInit(): void {
    this.loadData();
    this.solicitudForm = this.formBuilde.group({
      name: new FormControl('', [Validators.required]),
      patronus: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      house: new FormControl('', [Validators.required])
    });
  }

  get name(): AbstractControl { return this.solicitudForm.get('name'); }
  get patronus(): AbstractControl { return this.solicitudForm.get('patronus'); }
  get age(): AbstractControl { return this.solicitudForm.get('age'); }
  get house(): AbstractControl { return this.solicitudForm.get('house'); }

  loadData(){
    this.appService.getStudents().subscribe((response) => {
      this.students = response;
    })
  }

  enviarSolicitud(){
    if (this.solicitudForm.valid) {
      console.log(this.solicitudForm.value);

      if (localStorage.getItem('Solicitudes') === null) {
        
      }else{
        this.localInfo2 = JSON.parse(localStorage.getItem('Solicitudes'));
        console.log(this.localInfo2)
      }

      this.localInfo2.push(this.solicitudForm.value);

      this.localInfo = this.localInfo2;

      localStorage.setItem('Solicitudes', JSON.stringify(this.localInfo));

      console.log(this.localInfo)

      this.solicitudForm.reset();

      const Toast = Swal.mixin({
        toast: true,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });
      Toast.fire({
        icon: 'success',
        title: 'U guardada correctamente'
      });
    }else{
      const Toast = Swal.mixin({
        toast: true,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });
      Toast.fire({
        icon: 'error',
        title: 'Error al guardar organización',
      });
    }
  }

}
