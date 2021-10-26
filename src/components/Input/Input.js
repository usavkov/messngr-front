import PropTypes from 'prop-types';
import { Form, FloatingLabel, OverlayTrigger, Popover } from 'react-bootstrap';

export const Input = ({
  id,
  type = 'text',
  label: initLabel,
  labelType = 'standard',
  labelIcon,
  placeholder,
  register,
  popoverContent,
  className,
  readOnly,
  disabled,
  inline,
  required,
  size,
  ...rest
}) => {
  const isStandardLabel = labelType === 'standard';
  const InputWrapper = isStandardLabel ? Form.Group : FloatingLabel;
  const InputComponent =
    {
      text: Form.Control,
      checkbox: Form.Check,
    }[type] ?? Form.Control;
  const Icon = labelIcon;
  const label = (
    <>
      {initLabel}
      {required && <span style={{ color: 'red', marginLeft: 2 }}>*</span>}
    </>
  );

  return (
    <InputWrapper className={className} controlId={`input-${id}`} label={label}>
      {isStandardLabel && type !== 'checkbox' && label}
      {isStandardLabel && labelIcon && (
        <OverlayTrigger
          overlay={
            <Popover id={`popover-${id}`}>
              <Popover.Body>{popoverContent}</Popover.Body>
            </Popover>
          }
          placement='auto'
        >
          <Icon color='darkgray' className='mx-2' size={14} />
        </OverlayTrigger>
      )}
      <InputComponent
        type={type}
        placeholder={placeholder ?? ''}
        readOnly={readOnly}
        disabled={disabled}
        inline={inline}
        required={required}
        size={size}
        {...register(`${id}`)}
      />
      {isStandardLabel && type === 'checkbox' && label}
    </InputWrapper>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  labelType: PropTypes.oneOf(['standard', 'floating']),
  register: PropTypes.func.isRequired,
};
