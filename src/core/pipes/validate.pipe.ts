/* eslint-disable prettier/prettier */
import { 
  Injectable,
  ArgumentMetadata, 
  BadRequestException, 
  ValidationPipe, 
  UnprocessableEntityException 
} from '@nestjs/common';

@Injectable()
export class ValidateInputPipe extends ValidationPipe {
   public async transform(value, metadata: ArgumentMetadata) {
      try {
         console.log(await super.transform(value, metadata), 'ValidatePipe')
         console.log(value, metadata, 'value&metadata')
        return await super.transform(value, metadata);
      } catch (e) {
         if (e instanceof BadRequestException) {
            throw new UnprocessableEntityException(this.handleError(e));
         }
      }
   }

   private handleError(error) {
        return error.response.message.map(error => error);
   }
}