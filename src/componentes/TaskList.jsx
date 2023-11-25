import { Box, Textarea } from '@chakra-ui/react';
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Alert,
  AlertIcon,
  Checkbox,
  Text
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from 'react';
import { useState ,useEffect} from 'react';


function TaskList(props){
    const {element,btnDelete,updateTask}=props;
    const [isEdited,setIsEdited]=useState(false);
    const [errorNewtask, setErrorNewTask] = useState("");
    const [newInput,setNewInput]=useState('');
    const [newDescript,setNewDescript]=useState('');
    const [isChecked,setIsChecked]=useState(element.status);
    
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    useEffect(() => {
      if ((newInput.length <= 2 && newInput != "") || newInput.length > 20) {
        setErrorNewTask(
          "Tu tarea debe contener mas de 2 caracteres y menos de 20 caracteres"
        );
      } else {
        setErrorNewTask("");
      }
    }, [newInput]); 

    function handleEdit(){
        setIsEdited(true);
        setNewInput(element.task)
        setNewDescript(element.description)
        setIsChecked(isChecked)
    }
    function handleCancel(){
        setIsChecked(isChecked);
        setIsEdited(false);
        setNewInput(element.task);
        setNewDescript(element.description);

    }
    
    function handleSave(){
        if(newInput.length<=2){
        alert("Tu tarea debe ser mayor de 2 caracteres")
        }else{
        updateTask(element.id,newInput,newDescript)
        setIsChecked(true);
        setIsEdited(false)
        }
    }
    function handleDelete(){
      btnDelete(element.id)
    }

    if(!isEdited){
    return (
      <Box>
        <Box id="originDiv">
          <label
            className={`label-orig ${
              !element.description && "no-description-label"
            }`}
          >
            <Checkbox
              ml={"15px"}
              size="lg"
              _hover={{
                transform: "scale(1.5,1.5)",
                transition: "all 300ms",
              }}
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <Box className="task_description_div">
              <Text
                ml={"-40px"}
                mt={"10px"}
                className={`tasklist-input ${
                  !element.description && "no-description"
                }`}
              >
                {element.task}
              </Text>
              {element.description && (
                <Textarea
                  _hover={{
                    cursor:"auto"
                  }}
                  isDisabled={
                    "true"
                  }
                  cols={"37"}
                  _disabled={{
                    color:"black"
                  }}
                  ml={"-55px"}
                  border={"none"}
                  className="descriptionlist-input"
                >
                  {element.description}
                </Textarea>
              )}
            </Box>

            <Box className="edit_delete_btns">
              <Button
                mt={"25px"}
                mr={"18px"}
                id="btn-edit"
                onClick={handleEdit}
                className={!element.description && "no-description-edit"}
                _hover={{
                  border: "2px solid #44f814",
                  transform: "scale(1.1,1.1)",
                }}
              >
                ✏️
              </Button>
              <Button
                mt={"25px"}
                id="btn-delete"
                onClick={handleDelete}
                className={!element.description && "no-description-delete"}
                _hover={{
                  border: "2px solid #44f814",
                  transform: "scale(1.1,1.1)",
                }}
              >
                🗑️
              </Button>
            </Box>
          </label>
        </Box>
      </Box>
    ); 
    }else{
    return (
      <Box>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={handleEdit}
          onClose={handleCancel}
        >
          <ModalOverlay />
          <ModalContent
            bgPos={"center"}
            bgSize={"100%"}
            bgRepeat={"no-repeat"}
            bgColor={"black"}
            bgImage={
              "https://c4.wallpaperflare.com/wallpaper/623/1001/205/8-bit-arcade-cabinet-retro-games-monochrome-wallpaper-preview.jpg"
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
                  (newInput.length <= 2 && newInput != "") ||
                  newInput.length > 20
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
                    {errorNewtask}
                  </Alert>
                </FormErrorMessage>
                <Input
                  color={"white"}
                  _focus={{
                    bgColor: "#0F6292",
                  }}
                  ref={initialRef}
                  placeholder="First name"
                  value={newInput}
                  onChange={(e) => setNewInput(e.target.value)}
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
                  _focus={{
                    bgColor: "#0F6292",
                  }}
                  color={"white"}
                  placeholder="Last name"
                  value={newDescript}
                  onChange={(e) => setNewDescript(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleSave} isDisabled={newInput.length<=2} _disabled={{
                bgColor:"red",
                opacity:"0.3"
              }}>
                Save
              </Button>
              <Button onClick={handleCancel}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    );
    }
    
}

export default TaskList;