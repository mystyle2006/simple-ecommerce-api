import { Test, TestingModule } from '@nestjs/testing';

import { EvaController } from './eva.controller';
import { EvaService } from './eva.service';

describe('EvaController', () => {
  let controller: EvaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvaController],
      providers: [EvaService],
    }).compile();

    controller = module.get<EvaController>(EvaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
