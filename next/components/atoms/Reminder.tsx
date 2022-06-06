import moment from 'moment';
import { useTranslation } from 'next-i18next';
import React from 'react';
import Calendar from '../../../assets/icons/calendar.svg';
import Button from './Button';

interface ReminderProps {
  page: {
    id: string;
    start_date?: string;
    title: string;
  };
}

const Reminder = ({ page }: ReminderProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <p className="pb-2 text-md">{page.title}</p>
      <div className="flex items-center gap-6 mb-5">
        <p>{moment(page.start_date).format('DD. MM. YYYY')}</p>
        <span className="flex items-center gap-2 cursor-pointer">
          <Calendar className="w-[15px]" />
          {t('common.remindMe')}
        </span>
      </div>
      <Button size="small" href={`/detail/${page.id}`}>
        {t('common.detail')}
      </Button>
    </div>
  );
};

export default Reminder;
