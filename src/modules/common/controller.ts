import { Request, Response } from 'express';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import storage from '@src/config/firebase.config.js';

export class CommonController {
    uploadToFireBase = async (req: Request, folder: string) => {
        try {
            if (!req.file) {
                return null;
            }
            const dateTime = this.giveCurrentDateTime();
            const storageRef = ref(
                storage,
                `${folder}/${req?.file?.originalname + '       ' + dateTime}`
            );
            const metadata = {
                contentType: req.file?.mimetype,
            };
            const snapshot = await uploadBytesResumable(
                storageRef,
                req.file?.buffer!,
                metadata
            );
            const downloadURL = await getDownloadURL(snapshot.ref);
            return downloadURL;
        } catch (error) {
            const e = error as Error;
            return e.message;
        }
    };

    giveCurrentDateTime = () => {
        const today = new Date();
        const date =
            today.getFullYear() +
            '-' +
            (today.getMonth() + 1) +
            '-' +
            today.getDate();
        const time =
            today.getHours() +
            ':' +
            today.getMinutes() +
            ':' +
            today.getSeconds();
        const dateTime = date + ' ' + time;
        return dateTime;
    };
}
