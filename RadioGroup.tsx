   const [searchBillType, setSearchBillType] = useState<'' | 'BUY' | 'SELL'>('');
    const [searchIsAuthorize, setSearchIsAuthorize] = useState<boolean | undefined>(undefined);

    const handleChangeSearchBillType = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchBillType(event.target.value as '' | 'BUY' | 'SELL');
    };
    const handleChangeIsAuthorize = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchIsAuthorize(event.target.value.toLowerCase() === '' ? undefined : event.target.value.toLowerCase() === 'true');
    };

 <FormControl component="fieldset" style={{ marginTop: '-30px', marginBottom: '20px', marginRight: '20px' }}>
                    <FormLabel component="legend">Select Bill Type</FormLabel>
                    <RadioGroup
                        row
                        value={searchBillType}
                        onChange={handleChangeSearchBillType}
                    >
                        <FormControlLabel value="" control={<Radio />} label="ALL" />
                        <FormControlLabel value="SELL" control={<Radio />} label="SELL" />
                        <FormControlLabel value="BUY" control={<Radio />} label="BUY" />
                    </RadioGroup>
                </FormControl>

                <FormControl component="fieldset" style={{ marginTop: '-30px', marginBottom: '20px', marginRight: '30px' }}>
                    <FormLabel component="legend">Select Authorize</FormLabel>
                    <RadioGroup
                        row
                        value={searchIsAuthorize === undefined ? '' : searchIsAuthorize.toString()}
                        onChange={handleChangeIsAuthorize}
                    >
                        <FormControlLabel value="" control={<Radio />} label="ALL" />
                        <FormControlLabel value="false" control={<Radio />} label="Unauthorize" />
                        <FormControlLabel value="true" control={<Radio />} label="Authorize" />
                    </RadioGroup>
                </FormControl>
