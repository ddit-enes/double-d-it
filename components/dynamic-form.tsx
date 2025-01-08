import { FC } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field } from "@/types/page";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  fields: Field[];
};

const DynamicForm: FC<Props> = ({ fields }) => {
  const schema = z.object(
    fields.reduce(
      (acc, field) => {
        acc[field.fieldName] = field.required
          ? field.inputType.toLowerCase() === "email"
            ? z.string().email({ message: `${field.label} is invalid.` })
            : field.regex
              ? z
                  .string()
                  .regex(new RegExp(field.regex), {
                    message: `${field.label} is invalid.`,
                  })
                  .min(field.minLength ?? 4, {
                    message: `${field.label} must be at least ${field.minLength ?? 4} characters.`,
                  })
              : z.string().min(field.minLength ?? 4, {
                  message: `${field.label} must be at least ${field.minLength ?? 4} characters.`,
                })
          : z.string().optional();
        return acc;
      },
      {} as Record<string, z.ZodTypeAny>,
    ),
  );

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: fields.reduce(
      (acc, field) => {
        acc[field.fieldName] = "";
        return acc;
      },
      {} as Record<string, string>,
    ),
  });
  const { register, handleSubmit, control } = form;

  const onSubmit = (values: z.infer<typeof schema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-6">
          {fields.map((item, index) => (
            <div
              key={index}
              className={`${item.inputType !== "textarea" && item.inputType !== "select" ? "col-span-2 md:col-span-1" : "col-span-2"}`}
            >
              <FormField
                control={control}
                {...register(item.fieldName)}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{item.label}</FormLabel>
                    {item.inputType === "textarea" ? (
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder={item.placeholder}
                          rows={10}
                          className="resize-none"
                        />
                      </FormControl>
                    ) : item.inputType === "select" ? (
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={item.placeholder} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {item.questions?.map((question, qIndex) => (
                            <SelectItem key={qIndex} value={question}>
                              {question}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <FormControl>
                        <Input {...field} placeholder={item.placeholder} type={item.inputType} />
                      </FormControl>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}
        </div>
        {fields.length > 0 && (
          <Button type="submit" className="px-12 py-6 shadow-none text-base w-full md:w-auto">
            Send Message
          </Button>
        )}
      </form>
    </Form>
  );
};

export default DynamicForm;
