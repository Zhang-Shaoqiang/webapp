import React, { useState } from 'react';
import { setLocale, useIntl } from 'umi';
import {
  Container,
  TextField,
  Button,
  MenuItem,
  Select,
  makeStyles,
} from '@material-ui/core';
import styles from './index.less';

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: 50,
  },
}));

export default function IndexPage() {
  const classes = useStyles();
  const intl = useIntl();
  const [language, setLanguage] = useState('pt-BR');
  // 选择国家
  const handleChange = (event: any) => {
    setLanguage(event.target.value);
    // 切换语言
    setLocale(event.target.value, false);
  };

  return (
    <Container maxWidth="xs">
      <Select value={language} onChange={handleChange}>
        <MenuItem value="zh-CN">CN</MenuItem>
        <MenuItem value="pt-BR">PT</MenuItem>
      </Select>
      <h1 className={styles.title}>Logo</h1>
      <TextField
        fullWidth
        margin="normal"
        label={intl.formatMessage({
          id: 'pages.login.phoneNumber',
          defaultMessage: '手机号码',
        })}
        variant="outlined"
      />
      <TextField
        fullWidth
        margin="normal"
        label={intl.formatMessage({
          id: 'pages.login.captcha',
          defaultMessage: '验证码',
        })}
        variant="outlined"
      />
      <Button
        type="submit"
        fullWidth
        size="large"
        color="primary"
        variant="contained"
        className={classes.submit}
      >
        {intl.formatMessage({
          id: 'pages.login.submit',
          defaultMessage: 'LOGIN',
        })}
      </Button>
    </Container>
  );
}
