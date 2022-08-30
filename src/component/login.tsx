import React from "react";
import {Button, Checkbox, Form, Input} from "antd";
import {post} from "../util/http";
import {LOGIN_PWD} from "../network/request";
import {ApiParams} from "../network/apiParams";
import {store} from "../constant/store";

class LoginForm extends React.Component<any, any> {

    onFinish = (values: any) => {


        localStorage.setItem(store.mobile,values.mobile)
        localStorage.setItem(store.password,values.password)

        let apiParams = new ApiParams();
        apiParams.set("mobile",values.mobile)
        apiParams.set("password",values.password)
        post(LOGIN_PWD,apiParams,(res)=>{
            console.log(res)
        })
    };

    render() {

        return (
            <Form
                size="small"
                initialValues={{
                    mobile : localStorage.getItem(store.mobile),
                    password : localStorage.getItem(store.password)
                }}
                onFinish={this.onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="账号"
                    name="mobile"
                    rules={[
                        {
                            required: true,
                            message: '请输入账号',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 2,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default LoginForm
