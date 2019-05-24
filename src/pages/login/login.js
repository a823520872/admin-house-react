import React from 'react'

import { Card, Form, Input, Button } from 'antd'

const Login = ({ loading, form, form: { getFieldDecorator }, handleInput, handleSubmit }) => (
    <Card title="村里租房管理系统" className="login">
        <Form
            onSubmit={e => {
                e.preventDefault()
                form.validateFields((err, values) => {
                    if (err) return
                    handleSubmit()
                })
            }}
            layout="vertical"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
        >
            <Form.Item label="用户名">
                {getFieldDecorator('account', {
                    rules: [{ required: true, message: '请输入用户名' }]
                })(<Input size="large" onInput={e => handleInput(e, 'account')} />)}
            </Form.Item>
            <Form.Item label="密码">
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码' }]
                })(<Input type="password" size="large" onInput={e => handleInput(e, 'password')} />)}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 19, offset: 5 }}>
                <Button type="primary" htmlType="submit" size="large" loading={loading}>
                    登录
                </Button>
            </Form.Item>
        </Form>
    </Card>
)

export default Form.create({})(Login)
