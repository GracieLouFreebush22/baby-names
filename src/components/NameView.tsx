import { OneName } from "../BabyNamesData";

interface NameViewProps {
  onename: OneName;
}

export function NameView(props: NameViewProps): JSX.Element {
  return (
    <div className="name-view">
      <h4> {props.onename.name}</h4>
    </div>
  );
}

//Name view takes data from babyData and passes props into it 
