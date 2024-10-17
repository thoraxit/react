date: z.string().nullable().optional(),
const [billDate, setBillDate] = useState<Dayjs | null>(dayjs() || null);

   // bill form
    const {
        register,
        control,
        handleSubmit,
        setValue,
        reset,
        watch,
        formState: { errors },
    } = useForm<Bill>({
        resolver: zodResolver(billSchema),
        defaultValues: initialValues || {
            billNo: '',
            partyId: 0,
            branchId: 0,
            billDate: dayjs().format('YYYY-MM-DD'),
            items: itemList,
            isAuthorize: false,
            billType: 'SELL',
        },
    });

<LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Select Date"
                                value={billDate}
                                onChange={(newValue) => {
                                    setValue('billDate', newValue?.format('YYYY-MM-DD') ?? '');
                                    setBillDate(newValue)
                                }}
                                slotProps={{
                                    textField: {
                                        error: !!errors.billDate,
                                        helperText: errors.billDate?.message,
                                    },
                                }}
                                format="YYYY-MM-DD"
                                sx={{ mt: 2, }}

                            />
                        </LocalizationProvider>  
