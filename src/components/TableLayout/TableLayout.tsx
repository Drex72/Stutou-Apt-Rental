import { ReactElement } from "react";
import "./TableLayoutStyles.scss";
import Checkbox from "../Checkbox/Checkbox";

export const TableLayout = ({
  children,
  className,
}: {
  children: JSX.Element[];
  className?: string;
}) => {
  return <table className={className}>{children}</table>;
};

export const TableHeadContainer = ({
  children,
  checkbox,
  className,
}: {
  children: ReactElement;
  checkbox?: boolean;
  className?: string;
}) => {
  return (
    <thead>
      <tr className={className}>
        {checkbox && (
          <TableHead className="table_head_checkbox_container" label={<Checkbox />} />
        )}
        {children}
      </tr>
    </thead>
  );
};

export const TableBodyContainer = ({
  children,
  className,
}: {
  children: ReactElement;
  className?: string;
}) => {
  return <tbody className={className}>{children}</tbody>;
};

export const TableHead = ({
  label,
  className,
}: {
  label: string | ReactElement;
  className?: string;
}) => {
  return <th className={className}>{label}</th>;
};

export const TableBodyRow = ({
  children,
  className,
  checkbox,
}: {
  children: ReactElement[];
  className?: string;
  checkbox?: boolean;
}) => {
  return (
    <tr className={className}>
      {checkbox && (
        <TableBodyRowChild>
          <Checkbox />
        </TableBodyRowChild>
      )}
      {children}
    </tr>
  );
};

export const TableBodyRowChild = ({
  children,
  className, nonCapitalize
}: {
  children: any;
  className?: string;
  nonCapitalize?: boolean
}) => {
  return <td className={`${className} ${!nonCapitalize && 'capitalize'}`}>{children}</td>;
};
