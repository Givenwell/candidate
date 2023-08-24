import { ChangeEvent, useState } from "react";
import "./TimeRangeInput.css";

export type Time = { hour: number; minute: number };
export type TimeRange = { from: Time; to: Time };

type TimeRangeInputProps = { initialValue: TimeRange; onChange?: (value: TimeRange) => void };
export function TimeRangeInput(props: TimeRangeInputProps) {
  return (
    <>
      <div className="time-range-input">
        <span>
          <SingleTimeInput
            initialValue={props.initialValue.from}
            onChange={value => props.onChange?.({ ...props.initialValue, from: value })}
            placeholder="e.g. 9am"
          />
          ➜
          <SingleTimeInput
            initialValue={props.initialValue.to}
            onChange={value => props.onChange?.({ ...props.initialValue, to: value })}
            placeholder="5pm"
          />
        </span>
        <div className="warning">
          {"<<"}Warning message goes here{">>"}
        </div>
      </div>
    </>
  );
}

type SingleTimeInputProps = { initialValue: Time; onChange: (value: Time) => void; placeholder: string };
function SingleTimeInput({ placeholder }: SingleTimeInputProps) {
  const [value, setValue] = useState("");
  const invalid = false;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    // props.onChange?.({ hour: 0, minute: 0 });
  }

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className={invalid ? "invalid" : ""}
    />
  );
}
