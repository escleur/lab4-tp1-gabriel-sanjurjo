import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRtComponent } from './chat-rt.component';

describe('ChatRtComponent', () => {
  let component: ChatRtComponent;
  let fixture: ComponentFixture<ChatRtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatRtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
