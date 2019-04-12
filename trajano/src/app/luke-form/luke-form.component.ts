import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Luke} from '../luke';
import {ServicioConcretoService} from '../servicios/grupoAs/servicio-concreto.service';
import {ServiceService} from '../5-inject/service/service.service';

@Component({
  selector: 'luke-form',
  templateUrl: './luke-form.component.html',
  styleUrls: ['./luke-form.component.scss']
})
export class LukeFormComponent implements OnInit {
  @Output() lukeCreated = new EventEmitter<Luke>();


  constructor(public concretoService: ServicioConcretoService, public serviceService: ServiceService) { }

  ngOnInit() {
  }


  createLuke(setup: string, punchline: string) {
    this.lukeCreated.emit(new Luke(setup, punchline));
  }

  convertLuke(setup: string){
    this.concretoService.fromAToB(setup);
  }

  llamarServicio(setup: string){
    this.concretoService.llamadaWeb();
  }


}
