    const [roleOptions, setRoleOptions] = useState<RoleOption[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedRoles, setSelectedRoles] = useState<number[]>([]);

    const handleChange = (id: number) => {
        setSelectedRoles(prevSelected =>
            prevSelected.includes(id)
                ? prevSelected.filter(roleId => roleId !== id)
                : [...prevSelected, id]
        );
    };
    useEffect(() => {
        setValue('roles', selectedRoles);
    }, [handleChange])

           <FormGroup>
                {roleOptions.map(role => (
                    <FormControlLabel
                        key={role.id}
                        control={
                            <Checkbox
                                checked={selectedRoles.includes(role.id)}
                                onChange={() => handleChange(role.id)}
                                name={role.name}
                            />
                        }
                        label={role.name}
                    />
                ))}
            </FormGroup>
