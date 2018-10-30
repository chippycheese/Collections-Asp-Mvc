import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service'
import { CollectionsService } from '../../services/collections.service'

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.scss']
})
export class ItemNewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
