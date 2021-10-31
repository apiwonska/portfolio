/* eslint-disable jsx-a11y/label-has-associated-control */
import useIntersection from 'utilities/useIntersection';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextareaAutosize from 'react-textarea-autosize';
import styles from './Form.module.css';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    message: yup.string().required().min(20),
  })
  .required();

type IInputs = {
  name: string;
  email: string;
  message: string;
};

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, touchedFields },
    reset,
  } = useForm<IInputs>({
    resolver: yupResolver(schema),
  });

  const formRef = useIntersection<HTMLDivElement>(styles.form__visible, {
    threshold: 0.3,
  });

  const onSubmit: SubmitHandler<IInputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.form_wrapper} ref={formRef}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.form_group}>
          <label htmlFor="name">
            <span className={styles.form_label}>Name:</span>
            <input
              id="name"
              {...register('name')}
              className={styles.form_input}
            />
          </label>
          <p className={styles.form_error}>{errors.name?.message}</p>
        </div>

        <div className={styles.form_group}>
          <label htmlFor="email">
            <span className={styles.form_label}>Email:</span>
            <input
              id="email"
              {...register('email')}
              className={styles.form_input}
            />
          </label>
          <p className={styles.form_error}>{errors.email?.message}</p>
        </div>

        <div className={styles.form_group}>
          <label htmlFor="message">
            <span className={styles.form_label}>Message:</span>
            <TextareaAutosize
              id="message"
              {...register('message')}
              minRows={3}
              className={styles.form_textarea}
            />
          </label>
          <p className={styles.form_error}>{errors.message?.message}</p>
        </div>

        <button type="submit" className={styles.form_button}>
          SEND
        </button>
        {isSubmitSuccessful && Object.keys(touchedFields).length === 0 && (
          <p>Your message was sent!</p>
        )}
      </form>
    </div>
  );
};

export default Form;
