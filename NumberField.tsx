                        <TextField
                            {...registerItem('stock',{ valueAsNumber: true })}
                            label="Stock"
                            error={!!errorsItem.stock}
                            helperText={errorsItem.stock?.message}
                            margin="normal"
                            className="pr-2 w-[300px]"
                        />
