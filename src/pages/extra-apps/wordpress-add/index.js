import React from 'react'
import { Helmet } from 'react-helmet'
import { Form, Upload, Icon } from 'antd'

const FormItem = Form.Item
const { Dragger } = Upload

@Form.create()
class ExtraAppsWordpressAdd extends React.Component {
  render() {
    const { form } = this.props

    return (
      <div>
        <Helmet title="Wordpress Add" />
        <div className="air__utils__heading">
          <h5>Edit Projects</h5>
        </div>
        <div className="form-group">
          <FormItem>
            {form.getFieldDecorator('Files')(
              <Dragger>
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibit from uploading company data
                  or other band files
                </p>
              </Dragger>,
            )}
          </FormItem>
        </div>
        <FormItem>
          <button type="submit" className="btn btn-success btn-with-addon text-nowrap">
            <span className="btn-addon">
              <i className="btn-addon-icon fe fe-plus-circle" />
            </span>
            Add Post
          </button>
        </FormItem>
      </div>
    )
  }
}

export default ExtraAppsWordpressAdd
