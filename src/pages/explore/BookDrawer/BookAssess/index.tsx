import Avatar from "@/components/Avatar";
import { Button } from "@/components/Button";
import Stars from "@/components/Stars";
import TextArea from "@/components/TextArea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { Check, X } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { BookAssessSchema } from "..";
import {
  BookAssessContainer,
  BookAssessContent,
  BookAssessFooter,
  BookAssessHeader,
} from "./styles";

interface BookAssessProps {
  onClose: () => void;
  onSendAssess: (assess: BookAssessSchema) => void;
}

const assessSchema = z.object({
  rate: z.number().min(1).max(5),
  description: z.string(),
});

type AssessSchema = z.infer<typeof assessSchema>;

export default function BookAssess({ onClose, onSendAssess }: BookAssessProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AssessSchema>({
    resolver: zodResolver(assessSchema),
    defaultValues: {
      rate: 0,
      description: "",
    }
  });
  const session = useSession();
  const user = session.data?.user;

  function handleSendAssess(data: AssessSchema) {
    onSendAssess({ rate:data.rate, description:data.description });
    onClose();
  }

  return (
    <BookAssessContainer as="form" onSubmit={handleSubmit(handleSendAssess)}>
      <BookAssessHeader>
        <div>
          <Avatar src={user?.avatar_url} alt="" size="sm" />
          <span>{user?.name}</span>
        </div>
        <Controller
          name="rate"
          control={control}
          render={({ field }) => (
            <Stars totalOfStars={0} size="lg" editable onRate={(value) => field.onChange(value)} />
          )}
        />
      </BookAssessHeader>

      <BookAssessContent>
        <TextArea placeholder="Escreva sua avaliação" {...register("description")} />
        {errors?.description && <span>{errors.description.message}</span>}
        {errors?.rate && <span>{errors.rate.message}</span>}
      </BookAssessContent>

      <BookAssessFooter>
        <Button size="md" onClick={onClose}>
          <X size={24} />
        </Button>

        <Button size="md" type="submit">
          <Check size={24} />
        </Button>
      </BookAssessFooter>
    </BookAssessContainer>
  );
}
