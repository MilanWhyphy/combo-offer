import * as React from "react";
import {
  Input as AntdInput,
  Form,
  Select,
  Upload,
  Button,
  Radio,
  Checkbox,
  DatePicker,
  TimePicker,
} from "antd";
import styles from "./Input.module.css";
import Typography from "antd/es/typography/Typography";
import { UploadOutlined } from "@ant-design/icons";
const { MonthPicker } = DatePicker;
const { RangePicker } = DatePicker;
const { RangePicker: TimeRangePicker } = TimePicker;

const Input = React.forwardRef(
  (
    {
      buttonLabel,
      label,
      type,
      fileList,
      uploadProps,
      className,
      checkBoxLabel,
      required,
      ...props
    },
    ref
  ) => {
    return (
      <>
        {type !== "radio" &&
          type !== "checkbox" &&
          (required ? (
            <Typography className={styles.formLabelRequired}>
              {label} <sup className={styles.requiredSup}>*</sup>
            </Typography>
          ) : (
            <Typography className={styles.formLabel}>{label}</Typography>
          ))}
        {(type === "text" || type === "email" || type === "number") && (
          <AntdInput
            type={type}
            autoComplete="off"
            className={`${styles.formInput} ${className}`}
            {...props}
          />
        )}
        {type === "textarea" && <Input.TextArea {...props} />}
        {type === "password" && (
          <AntdInput.Password
            type={type}
            autoComplete="off"
            className={`${styles.formInput} ${className}`}
            {...props}
          />
        )}
        {type === "select" && (
          <Select
            autoComplete="off"
            className={`${styles.formSelect} ${className}`}
            {...props}
          />
        )}
        {type === "radio" && (
          <Radio.Group
            className={`${styles.radioWrapper} ${className}`}
            {...props}
          />
        )}

        {type === "single-checkbox" && (
          <Checkbox
            className={`${styles.singleCheckbox} ${className}`}
            {...props}
          >
            {checkBoxLabel}
          </Checkbox>
        )}

        {type === "checkbox" && (
          <Checkbox.Group
            className={`${styles.addOn} ${className}`}
            {...props}
          />
        )}
        {type === "upload" && (
          <Upload
            fileList={fileList}
            className={`${styles.upload} ${className}`}
            {...uploadProps}
          >
            <Button icon={<UploadOutlined />}>{buttonLabel}</Button>
          </Upload>
        )}

        {type === "datePicker" && (
          <DatePicker
            className={`${styles.datePicker} ${className}`}
            {...props}
          />
        )}

        {type === "rangeDatePicker" && (
          <RangePicker
            className={`${styles.rangeDatePicker} ${className}`}
            {...props}
          />
        )}

        {type === "rangeTimePicker" && (
          <TimeRangePicker
            className={`${styles.rangeTimePicker} ${className}`}
            {...props}
          />
        )}

        {type === "timePicker" && (
          <TimePicker
            className={`${styles.timePicker} ${className}`}
            {...props}
          />
        )}

        {/** this is temporary need to update after 15 sept,2024 */}
        {type === "demo-checkbox" && (
          <Checkbox.Group
            className={`${styles.demoCheckBox} ${className}`}
            {...props}
          />
        )}

        {type === "monthPicker" && (
          <MonthPicker
            className={`${styles.monthPicker} ${className}`}
            {...props}
          />
        )}
      </>
      // </Form.Item>
    );
  }
);

Input.displayName = "FormInput";

export default Input;
