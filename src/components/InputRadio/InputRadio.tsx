interface IProps {
  label?: string;
  id?: string;
  onChange?: any;
  checked?: boolean;
}

export const InputRadio = (props: IProps) => {
  return (
    <div>
      <input
        id={props.id}
        type="radio"
        onChange={props.onChange}
        checked={props.checked}
      />
      <label>{props.label}</label>
    </div>
  );
};
