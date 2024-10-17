                      <TextField
                            className="w-[300px]"
                            {...register('billNo')}
                            label="Bill No"
                            error={!!errors.billNo}
                            helperText={errors.billNo?.message}
                            margin="normal"
                            autoComplete="off"
                            sx={{
                                marginRight: '8px',
                                '& .MuiInputBase-input': {
                                    fontWeight: 'bold',
                                },
                                '& .MuiInputLabel-root': {

                                },

                            }}
                        />
