"use client";

import { ScrollArea } from "radix-ui/scroll-area";
import React, { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Calendar1, CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1 className='text-lg font-meduim mb-6'>Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button>
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='p-0 w-auto'>
          <Calendar
            mode='single'
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            className='rounded-lg border'
            captionLayout='dropdown'
          />
        </PopoverContent>
      </Popover>
      <ScrollArea className='max-h-100 mt-4 overflow-y-auto'>
        <div className='flex flex-col gap-4 p-1'>
          {/* LIST ITEM */}
          <Card className='p-4'>
            <div className='flex items-center gap-4'>
              <Checkbox id='item-1' name='terms-checkbox' />
              <label htmlFor='item-1' className='text-sm text-muted-foreground'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className='p-4'>
            <div className='flex items-center gap-4'>
              <Checkbox id='item-1' name='terms-checkbox' />
              <label htmlFor='item-1' className='text-sm text-muted-foreground'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className='p-4'>
            <div className='flex items-center gap-4'>
              <Checkbox id='item-1' name='terms-checkbox' />
              <label htmlFor='item-1' className='text-sm text-muted-foreground'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className='p-4'>
            <div className='flex items-center gap-4'>
              <Checkbox id='item-1' name='terms-checkbox' />
              <label htmlFor='item-1' className='text-sm text-muted-foreground'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className='p-4'>
            <div className='flex items-center gap-4'>
              <Checkbox id='item-1' name='terms-checkbox' />
              <label htmlFor='item-1' className='text-sm text-muted-foreground'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className='p-4'>
            <div className='flex items-center gap-4'>
              <Checkbox id='item-1' name='terms-checkbox' />
              <label htmlFor='item-1' className='text-sm text-muted-foreground'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className='p-4'>
            <div className='flex items-center gap-4'>
              <Checkbox id='item-1' name='terms-checkbox' />
              <label htmlFor='item-1' className='text-sm text-muted-foreground'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className='p-4'>
            <div className='flex items-center gap-4'>
              <Checkbox id='item-1' name='terms-checkbox' />
              <label htmlFor='item-1' className='text-sm text-muted-foreground'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
