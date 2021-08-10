import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { addItem, getItems } from "../actions/itemActions";

class ItemModel extends Component {
  state = {
    model: false,
    name: "",
  };

  toggle = () => {
    this.setState({
      model: !this.state.model,
    });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: this.state.name,
    };
    console.log(newItem)
    this.props.addItem(newItem);
    this.toggle();
  };
  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginLeft: "5rem", marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          add item
        </Button>
        <Modal isOpen={this.state.model} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>insert item</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add Shopping Item"
                  onChange={this.handleChange}
                ></Input>
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  submit
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { addItem, getItems })(ItemModel);
