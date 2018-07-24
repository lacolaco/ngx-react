# NgxReact

**Work in Progress**

```typescript
@Component({
  template: `
  <react-render [element]="element"></react-render>
  `
})
class SimpleComponent {
  // Create React element
  element = <div>Test Element</div>;
}
```

```typescript
@Component({
  template: `
  <react-render [element]="message$ | async"></react-render>
  `
})
class ReactiveComponent {
  // Update element when message changed
  message$ = this.messageService.message$.pipe(
    map(message => <div>{message}</div>)
  );
}
```
