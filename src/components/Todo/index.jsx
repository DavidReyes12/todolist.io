import React, { useEffect, useState } from 'react'
import { message, Spin } from 'antd';
import { useAPI } from '../../hook/useAPI';
import ButtonComp from '../ButtonComp';

import { Container, CardCont, AddTaskCont, InputCont, Button, TaskListCont, ItemList, CloseIcon } from "./style";

export const Todo = () => {

    const onSendRequest = useAPI();
    const [taskList, setTaskList] = useState([]);
    const [itemName, setItemName] = useState("");

    useEffect(() => {
        onGetList();
        /* eslint-disable */
    }, []);

    const onGetList = async() => {
       let data = await onSendRequest({ method: "get", url: "/todolist/getList" });
       setTaskList(onSortArray(data));
    };

    const onSortArray = (array) => {
        let uncompletedTasks = array.filter(({ done }) => !done);
        let completedTasks = array.filter(({ done }) => done);
        
        return uncompletedTasks.concat(completedTasks);
    }

    const onAddItem = async() => {
        if ( !itemName.trim() ) return;
        if ( taskList.filter( (item) => item.name === itemName.trim() ).length > 0 ) return message.error(`${itemName} already exist`);

        let body = {
            name: itemName.trim(),
            done: false
        };

        let data = await onSendRequest({ method: "post", url: "/todolist/addItemList", body });

        setTaskList( prevVal => {
            let newArray = [...prevVal, data]
            return onSortArray(newArray);
        });
        setItemName("");
    };

    const onUpdateItem = async(e, done, id, name) => {
        e.stopPropagation();
        let body = {
            done,
            id, 
            name
        };

        let { success } = await onSendRequest({ method: "put", url: `/todolist/updateItemList/${id}`, body });

        if (success) onGetList();
        
    };

    const onDeleteItem = async(e, id) => {
        e.stopPropagation();

        let { success } = await onSendRequest({ method: "delete", url: `/todolist/deleteItemList/${id}` });

        if (success) setTaskList( taskList.filter( (item) => item.id !== id ) );
        
    };

    return (
        <Container data-testid="TodoTest">
            
            <CardCont>

                <AddTaskCont>
                    <InputCont
                        type="text" 
                        name="task" 
                        id="task" 
                        placeholder="Add a task..."
                        value={itemName}
                        data-testid="addTaskTest"
                        onChange={({ target: { value } }) => setItemName(value)}
                    />
                    <ButtonComp render={ () => (
                        <Button data-testid="addTaskButtonTest" disabled={!itemName} onClick={onAddItem}>+</Button>
                    )}
                    />
                </AddTaskCont>

                <TaskListCont data-testid="taskListTest">
                    {
                        taskList.length > 0 ? (
                            <>
                                {
                                    taskList.map(({ id, done, name }) => (
                                        <ItemList 
                                            key={id}
                                            $done={done}
                                            onClick={(e) => onUpdateItem(e, !done, id, name)}
                                        >
                                            <div>{ name }</div>
                                            <CloseIcon onClick={(e) => onDeleteItem(e, id)} />
                                        </ItemList>
                                    ))    
                                }
                            </>
                        ) : (
                            <Spin data-testid="spinTest" size="large" />
                        )
                    }
                </TaskListCont>

            </CardCont>

        </Container>
    )
};

export default Todo
