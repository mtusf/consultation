
import { consultationValidationSchema } from "../validation/consultation.validation.js";
import consultationQueues from "../queues/consultation.queue.js";
export const consultationController = async (req, res, next) => {
  try {
    const result = consultationValidationSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        message: result.error.issues[0].message
      });
    }

    const { fullName, email, company, phoneNumber, service, projectDetail } = result.data;

    await consultationQueues.add('send-consultation-email', {
      fullName,
      email,
      company,
      phone: phoneNumber,
      service,
      projectDetail
    }, {
      attempts: 5,
      removeOnComplete: true,
      removeOnFail: true
    });

    return res.status(200).json({
      message: "Consultation request sent successfully"
    });

  } catch (error) {
    next(error);
  }
};
export default consultationController;