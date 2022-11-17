import { NameViewProps } from "./BabyNamesView";

export function NameView(props: NameViewProps): JSX.Element {
  // could set const props.onename to one thing for ease

  return (
    <div className="name-view">
      <h4> {props.onename.name}</h4>
    </div>
  );
}

//Name view takes data from babyData and passes props into it
