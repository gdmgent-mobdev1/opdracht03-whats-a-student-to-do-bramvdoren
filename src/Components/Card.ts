/* eslint-disable import/no-cycle */
import { v4 as uuidv4 } from 'uuid';
import { State } from '../Lib';
import { dragstartHandler } from '../Lib/dragAndDrop';
import Comment from './Comment';
import EditableText from './EditableText';
import TodoList from './TodoList';

export default class Card {
  place: HTMLElement;

  todoList: TodoList;

  state: State;

  subtaakContainer?: HTMLElement;

  card?: HTMLDivElement;

  deleteButton?: HTMLButtonElement;

  p?: HTMLParagraphElement;

  subtaak?: HTMLDivElement;

  subtaakTitle?: HTMLDivElement;

  subtaakDescription?: HTMLDivElement;

  commentsInput?: HTMLInputElement;

  commentsButton?: HTMLButtonElement;

  menuComments?: HTMLDivElement;

  editableDescription?: EditableText;

  editableTitle?: EditableText;

  id: string;

  parentId: string;

  // eslint-disable-next-line max-len
  constructor(title: string, place: HTMLElement, todoList: TodoList, id : string, parentId : string) {
    this.id = uuidv4();
    this.place = place;
    this.todoList = todoList;
    this.state = {
      id,
      title,
      description: 'Klik voor beschrijving,deadline...',
      comments: [],
    };
    this.parentId = parentId;
    this.render();
  }

  render(): void {
    this.card = document.createElement('div');
    this.card.classList.add('card');
    this.card.style.display = 'flex';
    this.card.style.order = '3';
    this.card.setAttribute('draggable', 'true');
    this.card.id = this.id;
    this.card.addEventListener('click', (e) => {
      if (e.target !== this.deleteButton) {
        this.showMenu.call(this);
      }
    });
    this.card.addEventListener('dragstart', dragstartHandler);

    this.p = document.createElement('p');
    this.p.innerText = this.state.title;
    this.p.classList.add('card__title');

    this.deleteButton = document.createElement('button');
    this.deleteButton.innerText = 'X';
    this.deleteButton.classList.add('card__btnDelete');
    this.deleteButton.addEventListener('click', () => {
      this.deleteCard.call(this);
    });

    this.card.append(this.p);
    this.card.append(this.deleteButton);

    this.place.append(this.card);
    this.place.classList.add('opdracht');
  }

  deleteCard(): void {
    this.card?.remove();
    const i = this.todoList.cardArray.indexOf(this);
    this.todoList.cardArray.splice(i, 1);
  }

  showMenu(): void {
    // Create elements
    this.subtaak = document.createElement('div');
    this.subtaakContainer = document.createElement('div');
    this.subtaakTitle = document.createElement('div');
    this.subtaakDescription = document.createElement('div');
    this.commentsInput = document.createElement('input');
    this.commentsButton = document.createElement('button');
    this.menuComments = document.createElement('div');

    // Add class names
    this.subtaak.className = 'subtaak';
    this.subtaakContainer.className = 'subtaakContainer';
    this.subtaakTitle.className = 'subtaakDeadline';
    this.subtaakDescription.className = 'subtaakDescription';
    this.menuComments.className = 'menuComments';
    this.commentsInput.className = 'commentsInput comment';
    this.commentsButton.className = 'commentsButton btn-save';

    // Add inner Text
    this.commentsButton.innerText = '+';
    this.commentsInput.placeholder = 'opmerking/vraag';

    // Event listeners
    this.subtaakContainer.addEventListener('click', (e: MouseEvent) => {
      if ((e.target as HTMLElement).classList.contains('subtaakContainer') && (this.subtaakContainer != null)) {
        this.subtaakContainer?.remove();
      }
    });

    this.commentsButton.addEventListener('click', () => {
      if (this.commentsInput?.value !== '' && (this.commentsInput != null)) {
        this.state.comments?.push(this.commentsInput.value);
        this.renderComments();
        this.commentsInput.value = '';
      }
    });

    // Append
    this.subtaak.append(this.subtaakTitle);
    this.subtaak.append(this.subtaakDescription);
    this.subtaak.append(this.commentsInput);
    this.subtaak.append(this.commentsButton);
    this.subtaak.append(this.menuComments);
    this.subtaakContainer.append(this.subtaak);
    this.place.append(this.subtaakContainer);

    this.editableDescription = new EditableText(this.state.description, this.subtaakDescription, this, 'description', 'textarea');
    this.editableTitle = new EditableText(this.state.title, this.subtaakTitle, this, 'title', 'input');

    this.renderComments();
  }

  renderComments(): void {
    if (this.menuComments instanceof HTMLElement && this.menuComments != null) {
      const currentCommentsDOM = Array.from(this.menuComments.childNodes);
      currentCommentsDOM.forEach((commentDOM) => {
        commentDOM.remove();
      });

      this.state.comments?.forEach((comment) => {
        if (this.menuComments instanceof HTMLElement) {
          // eslint-disable-next-line no-new
          new Comment(comment, this.menuComments, this);
        }
      });
    }
  }
}
