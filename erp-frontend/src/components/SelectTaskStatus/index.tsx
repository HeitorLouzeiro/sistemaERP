import { useEffect, useState } from 'react';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material';
import { TaskStatus } from 'src/models/Task';
import { useRequests } from 'src/utils/requests';

type Props = {
    selectedStatus: number;
    setSelectedStatus: (status_id: number) => void;
}

const SelectTaskStatus = ({ selectedStatus, setSelectedStatus }: Props) => {
    const [statuses, setStatuses] = useState<TaskStatus[]>([]);
    const { getTaskStatuses } = useRequests();

    useEffect(() => {
        const fetchStatuses = async () => {
            const response = await getTaskStatuses();
            if (!response.detail && response.data) {
                setStatuses(response.data.statuses);
            }
        };
        
        fetchStatuses();
    }, []);

    return (
        <FormControl fullWidth>
            <InputLabel>Selecione um Status</InputLabel>
            <Select
                value={selectedStatus}
                label="Selecione um Status"
                onChange={e => setSelectedStatus(+e.target.value)}
            >
                {statuses.map(status => (
                    <MenuItem key={status.id} value={status.id}>
                        {status.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default SelectTaskStatus;