import React, { useState,useEffect} from 'react';
import { Box,Textarea } from "@chakra-ui/react";
import { Button, Input, FormControl, FormLabel,FormErrorMessage, Alert , AlertIcon} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import TaskList from './TaskList';
import { useCBAHook } from '../hooks/useCBAHook';


function Task(){
    const [task,setTask]=useState("");
    const [description,setDescription]=useState("");
    const [errortask,setErrorTask]=useState("")
    const {tasks, createTask, deleteTask, updateTask} = useCBAHook();
    const [isClicked,setIsClicked]=useState(false);
 

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    
    useEffect(() => {
    if ((task.length <= 2 && task != "") || task.length>20) {
      setErrorTask("Tu tarea debe contener mas de 2 caracteres y menos de 20 caracteres");
    } else {
      setErrorTask("");
    }
    }, [task]); 
    
    function handleClick(e) {
     e.stopPropagation();
     setIsClicked(true);
     }

    function handleDelete(id) {
    deleteTask(id);
    setIsClicked(false);
    }

    function handleOnClickAdd(){
        createTask(task,description)
        setIsClicked(false)
        setTask("");
        setDescription("")
    }
    function handleCancel(){
        setIsClicked(false)
        setTask("");
        setDescription("")
    }                                                                                                                                                                                                                                                                            
    
    if(!isClicked){    
    return (
      <Box>
        <Box className="Task">
          <label>
            <Button
              id="btn-add"
              onClick={handleClick}
            >
              Add a new task
            </Button>
          </label>
          <Box>
            {tasks.map((item) => {
              return (
                <TaskList
                  key={item.id}
                  element={item}
                  btnDelete={handleDelete}
                  updateTask={updateTask}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    );
    }else{
    return (
      <Box>
        <Box className="task_and_description">
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={handleClick}
            onClose={handleCancel}
          >
            <ModalOverlay />
            <ModalContent
              bgSize={"100%"}
              bgImage={
                "https://i.pinimg.com/1200x/89/37/38/893738e5c56a29842ccd995d45af7c55.jpg"
              }
            >
              <ModalHeader
                color={"white"}
                fontFamily={"Super Mario World Text Box"}
              >
                TASK MANAGER
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl
                  isInvalid={
                    (task.length <= 2 && task != "") || task.length > 20
                  }
                >
                  <FormLabel
                    color={"white"}
                    fontFamily={"Super Mario World Text Box"}
                  >
                    TASK
                  </FormLabel>
                  <FormErrorMessage>
                    <Alert status="warning">
                      <AlertIcon />
                      {errortask}
                    </Alert>
                  </FormErrorMessage>
                  <Input
                    color={"white"}
                    ref={initialRef}
                    placeholder="First name"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel
                    color={"white"}
                    fontFamily={"Super Mario World Text Box"}
                  >
                    Task Description
                  </FormLabel>
                  <Textarea
                    color={"white"}
                    placeholder="Last name"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  isDisabled={
                    task.length <= 2 && task == "" || task.length > 20
                  }
                  _disabled={{
                    bgColor:"red",
                    opacity:"0.2"
                  }}
                  colorScheme="blue"
                  mr={3}
                  onClick={handleOnClickAdd}
                >
                  Save
                </Button>
                <Button onClick={handleCancel}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Box>
    );
    }
}

export {Task};