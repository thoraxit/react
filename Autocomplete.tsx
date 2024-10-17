partyId: z.number().min(1, { message: 'Please select a Party' }),
const [partyOptions, setPartyOptions] = useState<PartyOption[]>([]);
const [party, setParty] = useState<PartyOption | null>(null);
                   
                    <Autocomplete
                            className="pr-2 w-[300px]"
                            sx={{ mt: 2 }}
                            value={party}
                            onChange={(event, newValue) => {
                                setValue('partyId', newValue?.id ?? 0);
                                setParty(newValue)
                            }}

                            options={partyOptions}
                            getOptionLabel={(option) => option.name}  // Displays the name in the input field
                            renderOption={(props, option) => (
                                <li {...props} key={option.id}>
                                    {option.name} (ID: {option.id})
                                </li>
                            )}
                            isOptionEqualToValue={(option, value) => option.id === value.id} // Checks if the selected option matches
                            renderInput={(params) =>
                                <TextField {...params}
                                    label="Select Party"
                                    error={!!errors.partyId}
                                    helperText={errors.partyId?.message}
                                />}
                        />
